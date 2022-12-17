import styled from "styled-components";

export default function DropdownMenu({
  options,
  criteria,
  onChange,
}: {
  options: string[];
  criteria: string;
  onChange: any;
}): JSX.Element {
  return (
    <label htmlFor={criteria}>
      {`${criteria}`}
      <StyledSelect
        name={criteria}
        id={criteria}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
    </label>
  );
}

const StyledSelect = styled.select`
  margin: 3vw;
`;
