/**
 * The Flutter learning path shown on the dashboard.
 * Static for now; will come from the backend once courses are stored there.
 */
export const LEARNING_MODULES = [
  {
    id: "dart-basics",
    title: "Dart Basics",
    description: "Variables, types, functions, collections and null safety.",
    lessons: 8,
  },
  {
    id: "flutter-setup",
    title: "Flutter Setup",
    description: "Install the SDK, create your first app and use hot reload.",
    lessons: 5,
  },
  {
    id: "widgets-101",
    title: "Widgets 101",
    description: "Stateless vs stateful widgets, Text, Container, Row and Column.",
    lessons: 10,
  },
  {
    id: "layouts",
    title: "Layouts",
    description: "Flex, Stack, padding and building responsive screens.",
    lessons: 8,
  },
  {
    id: "state-management",
    title: "State Management",
    description: "setState, Provider and Riverpod, and when to use each.",
    lessons: 9,
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Routes, passing data between screens and go_router.",
    lessons: 6,
  },
  {
    id: "networking",
    title: "Networking & APIs",
    description: "HTTP requests, JSON parsing and handling loading and errors.",
    lessons: 7,
  },
  {
    id: "publishing",
    title: "Publish Your App",
    description: "Build, sign and release to the Play Store and App Store.",
    lessons: 4,
  },
];
