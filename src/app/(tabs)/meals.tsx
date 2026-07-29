import MealItem from "@/components/MealItem";
import { clearAllMeals, getMeals, Meal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAll = () => {
    Alert.alert("Clear All", "Delete all meals?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await clearAllMeals();
          loadMeals();
        },
      },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
      <View style={styles.list}>
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        )}
      </View>

      {meals.length > 0 && (
        <TouchableOpacity
          style={{ alignItems: "center", marginBottom: 40 }}
          onPress={handleClearAll}
        >
          <Text style={styles.clearButton}>Clear All Meals</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
    paddingBottom: 56,
    gap: 12,
  },
  clearButton: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    backgroundColor: "rgba(200,90,255,0.05)",
  },
});
