import { StoreType } from "@/interface";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkerPrps {
  map: any;
  stores: StoreType[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

const Markers = ({ map, stores, setCurrentStore }: MarkerPrps) => {
  const loadKaKaoMarkers = useCallback(() => {
    if (map) {
      stores?.map((item) => {
        var imageSrc = item.bizcnd_code_nm
            ? `/images/markers/${item.bizcnd_code_nm}.png`
            : `/images/markers/default.png`, // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(30, 30), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        var markerPosition = new window.kakao.maps.LatLng(
          item.y_dnts,
          item.x_cnts
        );

        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);

        //마커 커서가 오버되엇을 떄 마커 위에 표시할 인포윈도우 생성

        var content = `<div class="infowindow">${item.upso_nm}</div>`;

        var infowindow = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          infowindow.setMap(map);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          infowindow.setMap(null);
        });

        // 선택한 가게 저장

        window.kakao.maps.event.addListener(marker, "click", function () {
          setCurrentStore(item);

          let newMarker = new window.kakao.maps.Marker();
        });
      });
    }
  }, [map, setCurrentStore, stores]);

  useEffect(() => {
    loadKaKaoMarkers();
  }, [loadKaKaoMarkers, map]);
  return <></>;
};

export default Markers;
