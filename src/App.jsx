import { createContext, useContext, useState } from "react";

const TextContext = createContext("");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <TextContext.Provider value={{ theme, setTheme }}>
        <MainPage />
      </TextContext.Provider>

      <Modal>
        <button>Hej!</button>
        <div>Hej igen!</div>
      </Modal>
    </>
  );
}

function MainPage() {
  return (
    <>
      <UserTable />
    </>
  );
}

function UserTable() {
  const context = useContext(TextContext);

  return (
    <>
      <UserRow />
      <button
        onClick={() => {
          if (context.theme === "light") {
            context.setTheme("dark");
          } else {
            context.setTheme("light");
          }
        }}
      >
        Change theme
      </button>
    </>
  );
}

function UserRow() {
  const context = useContext(TextContext);

  return <div>{context.theme}</div>;
}

function Modal({ children }) {
  return (
    <div className="modal">
      <button>X</button>
      {children}
    </div>
  );
}

export default App;
