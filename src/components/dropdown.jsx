import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        <Dropdown.Item href="#/action-2">4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        <Dropdown.Item href="#/action-3">6</Dropdown.Item>
        <Dropdown.Item href="#/action-3">7</Dropdown.Item>
        <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        <Dropdown.Item href="#/action-3">9</Dropdown.Item>
        <Dropdown.Item href="#/action-3">10</Dropdown.Item>
        <Dropdown.Item href="#/action-3">11</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;