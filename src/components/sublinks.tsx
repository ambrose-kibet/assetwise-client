import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';
const Sublinks = () => {
  const subRef = useRef<HTMLDivElement>(null);
  const { isSubLinksOpen, position, content } = useAppSelector(
    (state: RootState) => state.nav
  );
  useEffect(() => {
    if (subRef.current) {
      subRef.current.style.top = `${position}px`;
      if (isSubLinksOpen) subRef.current.style.visibility = 'visible';
      else subRef.current.style.visibility = 'hidden';
    }
  }, [isSubLinksOpen, position, content]);
  return (
    <div
      className={isSubLinksOpen ? 'extra-menu show' : 'extra-menu'}
      ref={subRef}
    >
      {(content === 'properties' && (
        <div className="container">
          <div className="info-container">
            <h4>Companions in your real estate journey </h4>
            <p>
              Explore residential and commercial properties in Kenya for sale or
              rent.
            </p>
          </div>
          <ul className="residential-container">
            <h4>Residential Property </h4>
            <Link to="/properties?category=residential&type=sale">
              Residential Property for sale
            </Link>
            <Link to="/properties?category=residential&type=rent">
              Residential Property to let
            </Link>
          </ul>
          <ul className="commercial-container">
            <h4>Commercial Property </h4>
            <Link to="/properties?category=commercial&type=sale">
              Property for sale
            </Link>
            <Link to="/properties?category=commercial&type=rent">
              Property to let
            </Link>
          </ul>
        </div>
      )) ||
        null}
      {(content === 'dashboard' && (
        <div className="container">
          <div className="info-container">
            <h4>Companions in your real estate journey </h4>
          </div>
          <ul className="commercial-container">
            <h4>My Blog </h4>
            <Link to="/dashboard/admin/blog">Write a blog</Link>
            <Link to="/dashboard/admin/myblogs">My blogs</Link>
          </ul>
          <ul className="commercial-container">
            <h4>My Properties </h4>
            <Link to="/dashboard/admin/addproperty">Add Property</Link>
          </ul>
        </div>
      )) ||
        null}
    </div>
  );
};

export default Sublinks;
