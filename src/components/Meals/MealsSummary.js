import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, levada até você!</h2>
      <p>
        Escolha seu lanche favorito dentre nossas opções e coma em qualquer
        lugar!
      </p>
      <p>
        Todos os nossos lanches são cozinhados com ingredientes de alta
        qualidade! Pensados para surpreender seu paladar.
      </p>
    </section>
  );
};

export default MealsSummary;
