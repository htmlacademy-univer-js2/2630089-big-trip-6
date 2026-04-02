import { render, RenderPosition, replace } from "../framework/render";
import EditFormView from "../view/EditForm";
import PointView from "../view/Point";

export default class PointPresenter {
  constructor(point) {
    if (!point) {
      throw new Error("No point");
    }
    this.point = point;
  }

  addToFavorite() {
    this.point.isFavorite = true;
  }

  removeFromFavorite() {
    this.point.isFavorite = false;
  }

  toggleFavorite() {
    this.point.isFavorite = !this.point.isFavorite;
  }

  present() {
    const contentContainer = document.querySelector(".trip-events");
    const onEditPoint = (e, point) => {
      // eslint-disable-next-line no-shadow
      const close = (editForm) => {
        replace(point, editForm);
        // eslint-disable-next-line no-use-before-define
        document.removeEventListener("keyup", onEsc);
      };
      const onEsc = (e) => {
        if (e.key === "Escape") {
          // eslint-disable-next-line no-use-before-define
          close(editForm);
        }
      };
      const editForm = new EditFormView(
        point.point,
        (e) => {
          e.preventDefault();
          close(editForm);
        },
        () => close(editForm)
      );
      document.addEventListener("keyup", onEsc);

      replace(editForm, point);
    };

    const onFavoriteClick = () => {
      this.toggleFavorite();
    };

    render(
      new PointView(this.point, onEditPoint, onFavoriteClick),
      contentContainer,
      RenderPosition.BEFOREEND
    );
  }
}
