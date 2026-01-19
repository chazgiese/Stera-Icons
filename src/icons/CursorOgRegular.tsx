import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorOgRegularProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegular = memo(
  forwardRef<SVGSVGElement, CursorOgRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.7 1.77a.8.8 0 0 1 .8.12l12.76 11.24a.75.75 0 0 1-.4 1.3L15.7 15l2.05 4.55c.17.38 0 .82-.37 1l-3.65 1.64a.75.75 0 0 1-.99-.37l-2.06-4.55-3.17 2.76a.75.75 0 0 1-1.25-.56V2.45c0-.3.17-.56.44-.68M7.74 17.8l2.7-2.35.07-.05a.75.75 0 0 1 1.1.31l2.17 4.78 2.28-1.02-2.16-4.79a.75.75 0 0 1 .58-1.05l3.54-.47L7.75 4.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgRegular.displayName = 'CursorOgRegular';

// Triple export pattern (lucide-react style)
export { CursorOgRegular, CursorOgRegular as CursorOgRegularIcon, CursorOgRegular as SiCursorOgRegular };
export type { CursorOgRegularProps };
