import { Suspense, type ComponentType, type LazyExoticComponent } from "react";

interface SuspenceWrapperProps {
  component: LazyExoticComponent<ComponentType<unknown>>;
}

const SuspenseWrapper = ({
  component: LazyComponent,
}: SuspenceWrapperProps) => (
  <Suspense fallback={<div className="page-loader">Загрузка...</div>}>
    <LazyComponent />
  </Suspense>
);

export default SuspenseWrapper;
