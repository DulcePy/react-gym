import ExcerciseCard from "./ExcerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {
  const { workout } = props;

  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={["The", "DANGER", "zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((excercise, i) => {
          return <ExcerciseCard i={i} excercise={excercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
