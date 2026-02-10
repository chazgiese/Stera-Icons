import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderFillDuotone = memo(
  forwardRef<SVGSVGElement, FinderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.17 3q1.64-.02 2.72.06c.8.07 1.5.2 2.14.53a5.4 5.4 0 0 1 2.38 2.38c.32.64.46 1.34.53 2.14q.07 1.16.06 2.94v2.12q.01 1.65-.06 2.72c-.07.8-.2 1.5-.53 2.14a5.4 5.4 0 0 1-2.38 2.38c-.64.32-1.34.46-2.14.53q-.82.05-1.95.06h-.02a1 1 0 0 1-.78-.49 8 8 0 0 1-.63-1.51q-.21-.66-.41-1.6a8.6 8.6 0 0 0 4.93-1.63 1 1 0 0 0-1.17-1.62 6.6 6.6 0 0 1-4.07 1.25l-.1-1.32a7 7 0 0 1-1.83-.2l-.06-.01h-.03a1 1 0 0 1-.74-1.21 59 59 0 0 1 1.92-5.9 110 110 0 0 1 1.2-3.03l.01-.05.01-.03.01-.02v-.01a1 1 0 0 1 .77-.6L13.1 3h.07m2.39 4a1 1 0 0 0-1 1v1.33a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.1 3a1 1 0 0 0-.92.63v.02l-.02.03-.02.05-.32.79-.19.48h-.52c-1.26 0-2.15 0-2.84.06s-1.08.16-1.39.32q-.99.51-1.5 1.5c-.16.31-.27.71-.32 1.4C5 8.95 5 9.84 5 11.1v1.78c0 1.26 0 2.15.06 2.84s.16 1.08.32 1.39q.51.99 1.5 1.5c.31.16.71.27 1.4.32.68.06 1.57.06 2.83.06h1.4c.3.93.58 1.42.63 1.51a1 1 0 0 0 .78.49H11.1c-1.23 0-2.2 0-3-.06-.8-.07-1.5-.2-2.14-.53a5.4 5.4 0 0 1-2.38-2.38 6 6 0 0 1-.53-2.14c-.06-.8-.06-1.77-.06-3V11.1c0-1.23 0-2.2.06-3 .07-.8.2-1.5.53-2.14A5.4 5.4 0 0 1 5.97 3.6a6 6 0 0 1 2.14-.53c.8-.06 1.77-.06 3-.06h1.98" />
        <path fill="currentColor" d="M15.86 14.15a1 1 0 0 1 1.17 1.62 8.5 8.5 0 0 1-10.06 0 1 1 0 0 1 1.17-1.62 6.5 6.5 0 0 0 7.72 0M7.56 7a1 1 0 0 1 1 1v1.33a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1M15.56 7a1 1 0 0 1 1 1v1.33a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FinderFillDuotone.displayName = 'FinderFillDuotone';

// Triple export pattern (lucide-react style)
export { FinderFillDuotone, FinderFillDuotone as FinderFillDuotoneIcon, FinderFillDuotone as SiFinderFillDuotone };
export default FinderFillDuotone;
export type { FinderFillDuotoneProps };
