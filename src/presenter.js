import EditFormView from "./view/EditForm";
import FiltersView from "./view/Filters";
import SortingView from "./view/Sorting";
import PointView from "./view/Point";
import CreateFormView from "./view/CreateForm";
import { mockPoints } from "./mock/point";
import { render, RenderPosition, replace } from "./framework/render";
import PointPresenter from "./presenters/Point";

export default function present() {
  const filters = new FiltersView();
  const sorting = new SortingView();

  const contentContainer = document.querySelector(".trip-events");
  render(
    filters,
    document.querySelector(".trip-controls__filters"),
    RenderPosition.BEFOREEND
  );

  render(sorting, contentContainer, RenderPosition.BEFOREEND);
  // render(createForm, contentContainer, RenderPosition.BEFOREEND);
  // render(
  //   new EditFormView(mockPoints[0], onSubmitEdit),
  //   contentContainer,
  //   RenderPosition.BEFOREEND
  // );
  
  new PointPresenter(mockPoints[0]).present()
  new PointPresenter(mockPoints[0]).present()
  new PointPresenter(mockPoints[0]).present()
}
