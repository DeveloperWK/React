import { Button } from "flowbite-react";

const CustomButton: React.FC<{ color: string; content: string }> = ({
  color,
  content,
}) => {
  return (
    <>
      <Button color={color}>{content}</Button>
    </>
  );
};

export default CustomButton;
