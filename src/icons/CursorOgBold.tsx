import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorOgBoldProps = Omit<IconBaseProps, 'children'>;

const CursorOgBold = memo(
  forwardRef<SVGSVGElement, CursorOgBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.59 1.54a1 1 0 0 1 1.07.16l12.76 11.24a1 1 0 0 1-.53 1.74l-3.84.52 1.92 4.24a1 1 0 0 1-.5 1.32l-3.64 1.65a1 1 0 0 1-1.33-.5l-1.91-4.24-2.93 2.54A1 1 0 0 1 6 19.46V2.45a1 1 0 0 1 .59-.91M8 17.26l2.29-1.98.09-.08a1 1 0 0 1 1.47.42l2.06 4.56 1.83-.83-2.06-4.55a1 1 0 0 1 .78-1.4l3-.41L8 4.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgBold.displayName = 'CursorOgBold';

// Triple export pattern (lucide-react style)
export { CursorOgBold, CursorOgBold as CursorOgBoldIcon, CursorOgBold as SiCursorOgBold };
export type { CursorOgBoldProps };
