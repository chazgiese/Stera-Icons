import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomAiBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomAiBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtomAiBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-ai-bold-duotone" {...props}>
      <path d="M9.24 8.29a1 1 0 1 1 1.38 1.45l-.45.43a24 24 0 0 0-4.33 5.75q-.68 1.35-.8 2.22c-.1.6.04.76.05.77s.27.2 1.13-.01c.8-.2 1.82-.66 2.96-1.36a1 1 0 0 1 1.05 1.7 13 13 0 0 1-3.52 1.6c-1 .24-2.22.3-3.04-.51-.68-.7-.74-1.67-.62-2.5a10 10 0 0 1 1.01-2.82 26 26 0 0 1 5.18-6.72M17.3 3.16c.98-.24 2.2-.3 3.03.51.68.7.74 1.67.62 2.5A10 10 0 0 1 19.94 9a26 26 0 0 1-5.17 6.7 1 1 0 0 1-1.38-1.44l.44-.43a24 24 0 0 0 4.33-5.75q.68-1.35.8-2.21c.1-.6-.04-.77-.05-.78s-.27-.2-1.13.01c-.8.2-1.82.66-2.96 1.36a1 1 0 0 1-1.05-1.7 13 13 0 0 1 3.52-1.6" opacity={0.4} />
        <path fill="currentColor" d="M8.33 13.36a1 1 0 0 1 1.41.03l.43.44a24 24 0 0 0 5.75 4.33q1.35.68 2.21.8c.6.1.77-.04.78-.05s.2-.27-.01-1.13c-.2-.8-.66-1.82-1.36-2.96a1 1 0 0 1 1.7-1.05 13 13 0 0 1 1.6 3.52c.24 1 .3 2.22-.51 3.04-.7.68-1.67.74-2.5.62A10 10 0 0 1 15 19.93a26 26 0 0 1-6.7-5.17 1 1 0 0 1 .03-1.41M3.67 3.67c.7-.68 1.67-.74 2.5-.62.86.14 1.84.5 2.82 1.01a26 26 0 0 1 6.72 5.17 1 1 0 0 1-1.45 1.38l-.43-.44a24 24 0 0 0-5.75-4.33 8 8 0 0 0-2.21-.8c-.6-.1-.77.03-.78.05s-.2.27.01 1.14c.2.79.66 1.81 1.37 2.96a1 1 0 0 1-1.71 1.04 13 13 0 0 1-1.6-3.52c-.24-1-.3-2.22.51-3.04" />
    </IconBase>
  ))
);

AtomAiBoldDuotone.displayName = 'AtomAiBoldDuotone';

// Triple export pattern (lucide-react style)
export { AtomAiBoldDuotone, AtomAiBoldDuotone as AtomAiBoldDuotoneIcon, AtomAiBoldDuotone as SiAtomAiBoldDuotone };
export default AtomAiBoldDuotone;
export type { AtomAiBoldDuotoneProps };
