import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoolSFillProps = Omit<IconBaseProps, 'children'>;

const CoolSFill = memo(
  forwardRef<SVGSVGElement, CoolSFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.4 1.45a1 1 0 0 1 1.2 0l5 3.75a1 1 0 0 1 .4.8v2.3a1 1 0 0 1-1 1h-3.22a1 1 0 0 1-.67-.26l-.29-.26a1 1 0 0 1-.32-.73V6.5a.5.5 0 0 0-1 0v2.2q0 .21.16.37l5.98 5.04a1 1 0 0 1 .36.77V18a1 1 0 0 1-.4.8l-5 3.75a1 1 0 0 1-1.2 0l-5-3.75A1 1 0 0 1 6 18v-2.3a1 1 0 0 1 1-1h3.22q.39 0 .67.27l.28.25a1 1 0 0 1 .33.74v1.54a.5.5 0 0 0 1 0v-2.2a.5.5 0 0 0-.16-.37L6.36 9.9A1 1 0 0 1 6 9.12V6a1 1 0 0 1 .4-.8z" />
    </IconBase>
  ))
);

CoolSFill.displayName = 'CoolSFill';

// Triple export pattern (lucide-react style)
export { CoolSFill, CoolSFill as CoolSFillIcon, CoolSFill as SiCoolSFill };
export type { CoolSFillProps };
