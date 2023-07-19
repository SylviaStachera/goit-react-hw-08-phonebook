import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Welcome to the Phonebook Application! 📞 </h1>
      <p>Please register or login</p>
    </div>
  );
};
export default HomePage;
