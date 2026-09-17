export type InventoryCategory = {
  title: string
  subtitle: string
  /** Keywords the advisor uses to route a request to this category. */
  keywords: string[]
}

export const inventory: InventoryCategory[] = [
  {
    title: 'Food Services',
    subtitle: 'Containers & Wraps',
    keywords: ['food', 'container', 'clamshell', 'takeout', 'deli', 'cup', 'tray'],
  },
  {
    title: 'Tissue Paper',
    subtitle: 'Industrial Rolls',
    keywords: ['tissue', 'roll', 'napkin', 'towel', 'bath', 'jumbo'],
  },
  {
    title: 'Facility Care',
    subtitle: 'Hygiene Supplies',
    keywords: ['facility', 'hygiene', 'soap', 'sanitiser', 'sanitizer', 'liner', 'janitorial'],
  },
  {
    title: 'Packaging',
    subtitle: 'Corrugated & Wraps',
    keywords: ['packaging', 'box', 'corrugated', 'carton', 'shrink', 'stretch', 'pallet'],
  },
]
