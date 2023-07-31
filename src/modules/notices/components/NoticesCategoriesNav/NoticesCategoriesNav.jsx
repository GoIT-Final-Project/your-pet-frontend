import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AddPetButton from "../AddPetButton";
import NoticesFilters from "../NoticesFilters";
import {
  LinkButton,
  FilterAndAddPetBtnWrap,
  NoticesNavMainContainer,
  NoticesNavWrap,
  FilterCategoryBtn,
  FilterCategoryWrap,
  FilterCategoryText,
} from "./NoticesCategoriesNav.styled";
import useSearch from "../NoticesSearch/hook/useSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../../../redux/notices/notices-operations";
import useFilter from "./hooks/useFilter";
import useNavButtons from "./hooks/useNavButtons";
import icons from "../../../../assets/icons.svg";
import { noticesList } from "../../../../redux/notices/notices-selectors";

function NoticesCategoriesNav({ currentPage, setCurrentPage }) {
  const { categoryBtnsUrl, activeButton, setActiveButton } = useNavButtons();
  const { search, resetInput } = useSearch();
  const { filterState, setFilterState, resetFilter } = useFilter();
  const dispatch = useDispatch();
  const ref = useRef();

  const list = useSelector(noticesList);

  const { isBeforeOneYear, isUpOneYear, isUpTwoYear, isFemale, isMale } =
    filterState;
  const {
    setIsBeforeOneYear,
    setIsUpOneYear,
    setIsUpTwoYear,
    setIsFemale,
    setIsMale,
  } = setFilterState;

  const url = window.location.href;

  useEffect(() => {
    // const baseUrl = "https://my-pet-app-8sz1.onrender.com/notices";
    const baseUrl = "/notices";

    let fetchUrl;
    const filterQuery = search
      ? url.split("?")[1]?.replace(/%2C/g, ",").replace("search", "filter")
      : url.split("?")[1]?.replace(/%2C/g, ",");

    const commonParams = filterQuery ? `&${filterQuery}` : "";

    if (
      url.includes("/notices/sell") ||
      url.includes("/notices/lost-found") ||
      url.includes("/notices/for-free")
    ) {
      fetchUrl = `${baseUrl}?category=${activeButton}&page=${currentPage}&limit=9${commonParams}`;
    } else if (url.includes("/notices/favorite")) {
      fetchUrl = `${baseUrl}favorites?page=${currentPage}&limit=9${commonParams}`;
      ref.current = fetchUrl;
      dispatch(fetchNotices({ url: fetchUrl, privateRoute: true }));
      return;
    } else if (url.includes("/notices/own")) {
      fetchUrl = `${baseUrl}owner?page=${currentPage}&limit=9${commonParams}`;
      ref.current = fetchUrl;
      dispatch(fetchNotices({ url: fetchUrl, privateRoute: true }));
      return;
    }

    ref.current = fetchUrl;

    if (fetchUrl) {
      dispatch(fetchNotices({ url: fetchUrl }));
    }
  }, [activeButton, currentPage, dispatch, search, url]);

  useEffect(() => {
    // короче в идеале не последняя пейджа должна быть еще
    if (list.length === 8) {
      dispatch(fetchNotices(ref.current));
    }
  }, [dispatch, list.length]);

  const resetAllSearchQuery = (btn) => {
    resetFilter();
    resetInput();
    setActiveButton(btn);
    setCurrentPage(1);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:
          isBeforeOneYear || isUpOneYear || isUpTwoYear || isFemale || isMale
            ? 8
            : 0,
        marginBottom: 24,
      }}
    >
      <NoticesNavMainContainer>
        <NoticesNavWrap>
          {categoryBtnsUrl.map((btn) => (
            <LinkButton
              key={btn.to}
              to={btn.to}
              active={activeButton}
              onClick={() => resetAllSearchQuery(btn.to)}
            >
              {btn.label}
            </LinkButton>
          ))}
        </NoticesNavWrap>
        <FilterAndAddPetBtnWrap>
          <NoticesFilters
            filterState={filterState}
            setFilterState={setFilterState}
          />
          <AddPetButton />
        </FilterAndAddPetBtnWrap>
      </NoticesNavMainContainer>
      <FilterCategoryWrap>
        {isBeforeOneYear && (
          <FilterCategoryBtn onClick={() => setIsBeforeOneYear(false)}>
            <FilterCategoryText>3-12m</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isUpOneYear && (
          <FilterCategoryBtn onClick={() => setIsUpOneYear(false)}>
            <FilterCategoryText>1 year</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isUpTwoYear && (
          <FilterCategoryBtn onClick={() => setIsUpTwoYear(false)}>
            <FilterCategoryText>2 year</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isFemale && (
          <FilterCategoryBtn onClick={() => setIsFemale(false)}>
            <FilterCategoryText>female</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
        {isMale && (
          <FilterCategoryBtn onClick={() => setIsMale(false)}>
            <FilterCategoryText>male</FilterCategoryText>
            <svg width="16" height="16">
              <use href={icons + "#cross-small"} stroke="#54ADFF" />
            </svg>
          </FilterCategoryBtn>
        )}
      </FilterCategoryWrap>
    </div>
  );
}

export default NoticesCategoriesNav;

NoticesCategoriesNav.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
