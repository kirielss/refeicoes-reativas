import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Peixe de qualidade e vegetais',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'Uma especialidade alemã!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Hamburguer de grelha',
    description: 'O sabor americano',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Salada Verde',
    description: 'Verde...e saúdavel...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
