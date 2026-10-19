import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldProps = Omit<IconBaseProps, 'children'>;

const VolleyballBold = memo(
  forwardRef<SVGSVGElement, VolleyballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c1.84 0 3.58.48 5.09 1.31 1.72.96 3.14 2.38 4.1 4.1.83 1.51 1.31 3.25 1.31 5.09 0 3.92-2.15 7.34-5.33 9.14-1.53.87-3.3 1.36-5.17 1.36q-.4 0-.8-.03c-5.32-.4-9.52-4.75-9.7-10.13V12c0-1.87.49-3.62 1.34-5.14C4.64 3.66 8.07 1.5 12 1.5M6.88 12.05c.59 4.06 2.45 6.6 4.76 8.44l.36.01q1.16 0 2.22-.3c-.84-.61-1.48-1.4-1.95-2.22-.65-1.13-1-2.36-1.21-3.39l-.04.04-.1-.81-.07-.59c-1.63-.68-2.93-1.04-3.97-1.18m-2.01.04q-.84.2-1.34.63c.24 2.83 1.86 5.26 4.19 6.62-1.41-1.86-2.45-4.2-2.85-7.25m15.6-.7c-.98 2.32-2.88 4.55-5.9 6.42.5.6 1.14 1.1 1.97 1.38 2.38-1.51 3.96-4.17 3.96-7.19q0-.3-.02-.6m-2.72-5.65c-.2 1.17-.79 2.32-1.52 3.38q-.36.52-.8 1.06c-.76.94-1.66 1.87-2.6 2.76.08.77.27 1.97.74 3.14 4.1-2.56 5.64-5.68 5.74-8.42q-.65-1.08-1.56-1.92m-7.47 1.25c-1.89-.42-3.96-.28-5.8 1.04q-.58 1.08-.82 2.34.9-.36 2.08-.39c1.54-.03 3.44.4 5.84 1.4Q13 10.01 14.05 8.7c-.9-.66-2.24-1.36-3.77-1.7M12 3.5c-1.68 0-3.25.49-4.57 1.33 1.13-.12 2.25-.02 3.29.21 1.75.4 3.32 1.18 4.45 2q.84-1.57.6-2.66-1.73-.86-3.77-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBold.displayName = 'VolleyballBold';

// Triple export pattern
export { VolleyballBold, VolleyballBold as VolleyballBoldIcon, VolleyballBold as SiVolleyballBold };
export default VolleyballBold;
export type { VolleyballBoldProps };
