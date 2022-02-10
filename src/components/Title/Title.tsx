import styles from "./title.module.css";

export type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}
