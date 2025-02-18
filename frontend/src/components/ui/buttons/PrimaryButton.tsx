type PrimaryButtonProps = {
  action: () => void;
  label: string;
}

const PrimaryButton = ({action, label}: PrimaryButtonProps) => {
  return <button onClick={action} >{label}</button>
}

export default PrimaryButton