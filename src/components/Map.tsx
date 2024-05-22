/*global kakao*/

import Script from "next/script";
import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

const Map = ({ setMap }: MapProps) => {
  const DEFAULT_LATLNG = {
    lat: 37.497625203,
    lng: 127.03088379,
  };

  const loadKakaoMap = () => {
    // kakao map 로드
    window.kakao.maps.load(() => {
      var mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var mapOptions = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(
          DEFAULT_LATLNG.lat,
          DEFAULT_LATLNG.lng
        ), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOptions);

      setMap(map);
      //상점들 데이터
    });
  };

  return (
    <>
      <div id="map" className="w-full h-screen">
        <Script
          onReady={loadKakaoMap}
          strategy="afterInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        />
      </div>
    </>
  );
};

export default Map;
