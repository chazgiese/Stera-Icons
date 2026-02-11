import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CandleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="candle-duotone" {...props}>
      <path fillRule="evenodd" d="M13.83 10.25q.8 0 1.34.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v4.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-3.6q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-4.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.54-.04 1.34-.03a3.6 3.6 0 0 0 3.66 0m-3.63 1.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v4.6q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h3.6c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-4.6c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.5 1.43c.3-.24.7-.24 1 0v.01l.03.03.1.1a14 14 0 0 1 2.57 3.21c.31.61.55 1.3.55 2.02 0 2.14-1.63 3.95-3.75 3.95S8.25 8.94 8.25 6.8c0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68a15 15 0 0 1 1.44-1.54l.1-.09.04-.03m.5 1.6q-.4.4-.92 1.02c-.35.43-.7.92-.94 1.41q-.38.75-.39 1.34c0 1.4 1.05 2.45 2.25 2.45s2.25-1.05 2.25-2.45q0-.59-.39-1.34a8 8 0 0 0-.94-1.41q-.51-.61-.92-1.02" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleRegularDuotone.displayName = 'CandleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CandleRegularDuotone, CandleRegularDuotone as CandleRegularDuotoneIcon, CandleRegularDuotone as SiCandleRegularDuotone };
export default CandleRegularDuotone;
export type { CandleRegularDuotoneProps };
