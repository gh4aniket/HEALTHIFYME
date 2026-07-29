import { addMeal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddMealScreen() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleAddMeal = async () => {
    if (!name || !calories) {
      Alert.alert("Error", "Please enter a meal name and calories.");
      return;
    }

    await addMeal({
      name,
      calories: Number(calories),
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    });

    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Alert.alert("Success", "Meal added successfully!");

    router.push("/");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>

      <TextInput
        style={styles.input}
        placeholder="Meal name"
        placeholderTextColor={colors.textSecondary}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Calories"
        placeholderTextColor={colors.textSecondary}
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Protein (g)"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
          value={protein}
          onChangeText={setProtein}
        />
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Carbs (g)"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
          value={carbs}
          onChangeText={setCarbs}
        />
        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder="Fat (g)"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
          value={fat}
          onChangeText={setFat}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255,255,255,0.03)",
    color: colors.text,
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  rowInput: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    color: colors.header,
    fontSize: 16,
    fontWeight: "800",
  },
});
