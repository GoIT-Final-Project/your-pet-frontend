import NoticesSearch from "../../modules/notices/components/NoticesSearch";
import NoticesCategoriesNav from "../../modules/notices/components/NoticesCategoriesNav";
import NoticesCategoriesList from "../../modules/notices/components/NoticesCategoriesList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLogin,
  noticesIsLoading,
  noticesList,
  noticesTotal,
} from "../../redux/notices/notices-selectors";
import { NoticesContainer, NoticesTitle } from "./NoticesPage.styled";
import Pagination from "../../shared/components/Notices/Pagination";
import ScrollTopButton from "../../shared/components/Notices/ScrollTopButton";
import Loader from "../../shared/loader/Loader";

function NoticesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const totalNoticesItems = useSelector(noticesTotal);
  const noticesListInPagination = useSelector(noticesList);
  const isLoggedIn = useSelector(isLogin);
  const isLoading = useSelector(noticesIsLoading);

  const dispatch = useDispatch();

  const isPagination = noticesListInPagination.length > 0 ? true : false;

  useEffect(() => {
    if (
      totalNoticesItems > 0 &&
      noticesListInPagination.length === 0 &&
      currentPage !== 1
    ) {
      setCurrentPage((prev) => (prev -= 1));
    }
  }, [currentPage, noticesListInPagination.length, totalNoticesItems]);

  useEffect(() => {
    if (pathname === "/notices") {
      navigate("/notices/sell", { replace: true });
    }
  }, [pathname, navigate, dispatch]);

  useEffect(() => {
    if (pathname === "/notices/favorite" || pathname === "/notices/own") {
      !isLoggedIn && navigate("/login");
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <NoticesContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <NoticesSearch />
      <NoticesCategoriesNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Loader loading={isLoading} />

      <NoticesCategoriesList />
      {isPagination && !isLoading && (
        <Pagination
          totalItems={totalNoticesItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <ScrollTopButton />
    </NoticesContainer>
  );
}

export default NoticesPage;
