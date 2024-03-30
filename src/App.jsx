import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handleChange2(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log("hhhh")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChange2}
        />
        <Button type="submit" colorScheme="blue">Button</Button>
      </form>
    </>
  );
}

export default App;
