import React, { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
// material
import { Grid, Autocomplete, TextField } from '@mui/material';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
// __apis__
import { foodItemsFetcher } from 'src/__apis__/foodItems';

// -----------------------------------------------------------------------------------------

function FoodSelection({ excludedFoodItemsState, preferedFoodItemsState }) {
  const [excludedFoodItems, setExcludedFoodItems] = excludedFoodItemsState;
  const [preferedFoodItems, setPreferedFoodItems] = preferedFoodItemsState;

  const [foodItems, setFoodItems] = useState([]);
  const [mappedFoodItems, setMappedFoodItems] = useState([]);

  const triggerAlert = useSetRecoilState(alertAtom);

  const fetchFoodItems = useCallback(async () => {
    await foodItemsFetcher()
      .then((foodItemsResponse) => {
        setFoodItems(foodItemsResponse);
      })
      .catch((error) => {
        console.log('Error fetching food items', error.response);
        triggerAlert({ triggered: true, type: 'error', message: 'Error loading food items' });
      });
  }, [foodItemsFetcher, triggerAlert]);

  useEffect(() => {
    fetchFoodItems();
  }, []);

  useEffect(() => {
    setMappedFoodItems(foodItems.map((foodItem) => ({ title: foodItem.en_name, id: foodItem.id })));
  }, [foodItems]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          value={excludedFoodItems}
          onChange={(event, newValue) => setExcludedFoodItems(newValue)}
          options={mappedFoodItems}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Food you don't like ?" />}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          value={preferedFoodItems}
          onChange={(event, newValue) => setPreferedFoodItems(newValue)}
          options={mappedFoodItems.filter((foodItem) => !excludedFoodItems.includes(foodItem))}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} variant="outlined" label="Food you like ?" />}
        />
      </Grid>
    </Grid>
  );
}

export default FoodSelection;
