import styled from "styled-components";

export default function DropdownMenu({
  options,
  criteria,
  onChange,
  dataCy,
}: {
  options: string[];
  criteria: string;
  onChange: any;
  dataCy: string;
}): JSX.Element {
  return (
    <label htmlFor={criteria}>
      {`${criteria}`}
      <StyledSelect
        data-cy={dataCy}
        name={criteria}
        id={criteria}
        onChange={(event) => onChange(criteria, event.target.value)}
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
