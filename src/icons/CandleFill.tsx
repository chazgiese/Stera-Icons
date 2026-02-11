import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillProps = Omit<IconBaseProps, 'children'>;

const CandleFill = memo(
  forwardRef<SVGSVGElement, CandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="candle-fill" {...props}>
      <path fillRule="evenodd" d="M11.42 1.19a1 1 0 0 1 1.24.05v.02l.04.02.47.45c.3.3.7.72 1.1 1.22a10 10 0 0 1 1.15 1.72 4.28 4.28 0 0 1-1.14 5.58q.51 0 .9.03.56.03 1.07.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v4.6q0 .82-.03 1.38t-.27 1.07q-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-3.6q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.07q-.04-.56-.03-1.38v-4.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.38-.03.89-.03a4.3 4.3 0 0 1-1.14-5.58 10 10 0 0 1 1.14-1.72 15 15 0 0 1 1.58-1.67l.03-.02.01-.01zm.58 2.2q-.34.34-.72.82-.54.65-.92 1.37Q10 6.29 10 6.8c0 1.28.96 2.2 2 2.2s2-.92 2-2.2q0-.5-.36-1.22a8 8 0 0 0-.92-1.37q-.38-.48-.72-.82" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleFill.displayName = 'CandleFill';

// Triple export pattern (lucide-react style)
export { CandleFill, CandleFill as CandleFillIcon, CandleFill as SiCandleFill };
export default CandleFill;
export type { CandleFillProps };
