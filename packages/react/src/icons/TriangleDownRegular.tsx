import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TriangleDownRegularProps = Omit<IconBaseProps, 'children'>;

const TriangleDownRegular = memo(
  forwardRef<SVGSVGElement, TriangleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.73 2.25q2-.02 3.22.07a4 4 0 0 1 2.08.64 3.8 3.8 0 0 1 1.53 2.64c.07.68-.14 1.37-.48 2.12q-.52 1.1-1.53 2.83l-3.73 6.53c-.68 1.18-1.2 2.11-1.69 2.8a4 4 0 0 1-1.6 1.5c-.97.43-2.09.43-3.06 0a4 4 0 0 1-1.6-1.5c-.48-.69-1.01-1.62-1.69-2.8l-3.73-6.53C2.8 9.4 2.25 8.47 1.92 7.72a4 4 0 0 1-.48-2.12 3.8 3.8 0 0 1 1.53-2.64 4 4 0 0 1 2.08-.64q1.22-.09 3.22-.07zm-7.46 1.5c-1.37 0-2.35 0-3.08.07-.74.07-1.11.2-1.34.36-.52.37-.85.95-.92 1.58-.03.28.05.66.35 1.34.3.67.8 1.52 1.47 2.71l3.73 6.53a39 39 0 0 0 1.61 2.68c.44.61.73.87 1 .99.58.26 1.24.26 1.83 0 .26-.12.55-.38.98-1 .43-.6.93-1.47 1.62-2.68l3.72-6.52c.69-1.2 1.17-2.04 1.48-2.71.3-.68.38-1.06.35-1.34-.07-.63-.4-1.2-.92-1.58-.23-.17-.6-.3-1.34-.36-.73-.07-1.7-.07-3.08-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleDownRegular.displayName = 'TriangleDownRegular';

// Triple export pattern (lucide-react style)
export { TriangleDownRegular, TriangleDownRegular as TriangleDownRegularIcon, TriangleDownRegular as SiTriangleDownRegular };
export type { TriangleDownRegularProps };
