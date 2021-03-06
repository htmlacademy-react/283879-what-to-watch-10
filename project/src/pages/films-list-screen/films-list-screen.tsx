import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Films } from '../../types/films';
import FilmsList from '../../components/films-list/films-list';

type FilmsListScreenProps = {
  films: Films
}

function FilmsListScreen({ films }: FilmsListScreenProps): JSX.Element {

  return (
    <div className="user-page">
      <Header isAuthorized pageTitle={ 'My list' } filmsCount={ films.length } extraClasses={ 'user-page__head' }/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            <FilmsList films={films} />
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FilmsListScreen;
