import Header from "./Header";

export default function AppContainer({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  );
}
