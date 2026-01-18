import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubePackageRegularProps = Omit<IconBaseProps, 'children'>;

const CubePackageRegular = memo(
  forwardRef<SVGSVGElement, CubePackageRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.04 1.92a5 5 0 0 1 1.92 0c.74.16 1.42.54 2.51 1.15l2.6 1.45c1.16.64 1.89 1.03 2.42 1.61q.69.77 1.02 1.73c.25.76.24 1.59.24 2.9v2.47c0 1.32 0 2.15-.24 2.9a5 5 0 0 1-1.02 1.74c-.53.58-1.26.97-2.42 1.61l-2.6 1.45c-1.09.6-1.77 1-2.51 1.15q-.96.2-1.92 0c-.74-.15-1.42-.54-2.51-1.15l-2.6-1.45c-1.16-.64-1.89-1.03-2.42-1.61q-.69-.77-1.02-1.73c-.25-.76-.24-1.59-.24-2.9v-2.47c0-1.32 0-2.15.24-2.9q.32-.98 1.02-1.74c.53-.58 1.26-.97 2.42-1.61l2.6-1.45c1.09-.6 1.77-1 2.51-1.15M3.91 8.36a9 9 0 0 0-.16 2.4v2.47c0 1.43 0 1.97.16 2.44q.23.66.7 1.18c.34.36.8.63 2.05 1.32l2.6 1.45c1.1.6 1.56.85 1.99.96v-8.14zm13.14 1.7.01.03c.2.6.19 1.26.19 2.23V13a.75.75 0 0 1-1.5 0v-.68c0-.82 0-1.23-.05-1.52l-2.95 1.64v8.14c.43-.1.9-.35 2-.96l2.6-1.45c1.24-.69 1.7-.96 2.04-1.32q.47-.52.7-1.18c.15-.47.16-1.01.16-2.44v-2.46c0-1.4-.01-1.95-.16-2.4zM6.65 5.82a10 10 0 0 0-1.97 1.25L12 11.14l2.91-1.62c-.23-.17-.58-.37-1.24-.74L7.5 5.36zm6-2.44a3 3 0 0 0-1.3 0c-.47.1-.92.34-2.1 1l-.2.11 5.35 2.97c.85.48 1.43.79 1.86 1.25q0 .03.03.04l3.03-1.68c-.34-.33-.82-.61-1.98-1.25l-2.6-1.45a8 8 0 0 0-2.09-.99" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageRegular.displayName = 'CubePackageRegular';

export { CubePackageRegular };
export type { CubePackageRegularProps };
