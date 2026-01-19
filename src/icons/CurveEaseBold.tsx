import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveEaseBoldProps = Omit<IconBaseProps, 'children'>;

const CurveEaseBold = memo(
  forwardRef<SVGSVGElement, CurveEaseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M21 4a1 1 0 1 1 0 2c-4.04 0-6.4 3-8.7 6.55-1.1 1.7-2.22 3.54-3.46 4.93C7.58 18.88 6.04 20 4 20h-.09.05H3a1 1 0 0 1 0-2H4c1.21 0 2.25-.64 3.34-1.85 1.1-1.24 2.1-2.9 3.27-4.7C12.87 8 15.77 4 21 4M10.94 18a1 1 0 1 1 0 2h-.44a1 1 0 0 1 0-2zM14 18a1 1 0 0 1 0 2h-.44a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M10.54 4a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2h.54M13.6 4a1 1 0 0 1 0 2h-.54a1 1 0 1 1 0-2h.54" />
    </IconBase>
  ))
);

CurveEaseBold.displayName = 'CurveEaseBold';

// Triple export pattern (lucide-react style)
export { CurveEaseBold, CurveEaseBold as CurveEaseBoldIcon, CurveEaseBold as SiCurveEaseBold };
export default CurveEaseBold;
export type { CurveEaseBoldProps };
