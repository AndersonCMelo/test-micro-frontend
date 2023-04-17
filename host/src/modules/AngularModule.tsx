import React, { useEffect,Suspense } from "react";
// @ts-ignore
import { mountApp, mountButton, mountButtonMaterial } from "angular_app/AngularComponent";

const AngularModule = () => {
  // const ref = useRef(null);
  useEffect(() => {
    mountApp();
    mountButton();
    mountButtonMaterial();
  }, []);
  
  return (
    <Suspense fallback={<p>Loading</p>}>
        {/* <app-root></app-root> */}
        <app-button></app-button>
        <app-button-material></app-button-material>
    </Suspense>
  );
};

export default AngularModule;