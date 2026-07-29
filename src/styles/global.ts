import { StyleSheet } from "react-native";

export const colors = {
  background: "#070708",
  header: "#0f1112",
  surface: "#0f1316",
  primary: "#8CFF4A",
  accent: "#C85CFF",
  text: "#E7EEF2",
  textSecondary: "#98a0a6",
  alert: "#FF6B6B",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.primary,
    letterSpacing: 0.6,
  },
  smallTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 24,
    marginBottom: 12,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
});
