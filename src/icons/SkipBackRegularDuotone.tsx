import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackRegularDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-back-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.6 4.12c.51.03.99.28 1.3.7.23.3.3.66.32.97q.04.49.03 1.2V17q0 .71-.03 1.2c-.03.3-.1.67-.32.98-.31.4-.79.66-1.3.69-.38.02-.72-.13-1-.28q-.42-.23-1-.63l-7.02-4.68q-.61-.4-1.01-.71a2 2 0 0 1-.66-.81 2 2 0 0 1 0-1.54c.14-.34.4-.6.66-.8q.4-.32 1.01-.72l7.02-4.68q.58-.4 1-.63a2 2 0 0 1 .86-.28zm-.07 1.5q-.03 0-.21.1-.29.14-.9.56l-7 4.68c-.44.29-.72.47-.91.63-.2.15-.22.22-.22.22a.5.5 0 0 0 0 .38s.03.07.22.22c.2.16.47.34.9.63l7.02 4.68a13 13 0 0 0 1.1.66q.1 0 .16-.09l.04-.22c.02-.24.02-.56.02-1.06V7a13 13 0 0 0-.06-1.28.3.3 0 0 0-.16-.09" clipRule="evenodd" />
        <path fill="currentColor" d="M4.5 4.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

SkipBackRegularDuotone.displayName = 'SkipBackRegularDuotone';

// Triple export pattern (lucide-react style)
export { SkipBackRegularDuotone, SkipBackRegularDuotone as SkipBackRegularDuotoneIcon, SkipBackRegularDuotone as SiSkipBackRegularDuotone };
export default SkipBackRegularDuotone;
export type { SkipBackRegularDuotoneProps };
