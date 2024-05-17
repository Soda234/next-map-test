import Link from "next/link";
import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <Link href="/" className="navbar_list-item">
            next map
          </Link>
        </div>
        <div className="navbar_list">
          <Link href="/stores" className="navbar_list-item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar_list-item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar_list-item">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar_list-item">
            로그인
          </Link>
        </div>
        {/* mobile button */}
        <div
          role="presentation"
          className="navbar_button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>

      {/* mobile navbar */}

      <div>
        {isOpen && (
          <div className="navbar-mobile">
            <div className="navbar_list-mobile">
              <Link href="/stroes" className="navbar_list-item-mobile">
                맛집 목록
              </Link>
              <Link href="/stroes/new" className="navbar_list-item-mobile">
                맛집 등록
              </Link>
              <Link href="/users/likes" className="navbar_list-item-mobile">
                찜한 가게
              </Link>
              <Link href="/users/login" className="navbar_list-item-mobile">
                로그인
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
