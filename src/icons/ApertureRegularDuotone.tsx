import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureRegularDuotone = memo(
  forwardRef<SVGSVGElement, ApertureRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="m9.6 8.93.02-.02.09-.06.13-.1.17-.1.05-.03.05-.03 6.23-3.6q.7.43 1.3.99l-4.18 2.4.04.02.1.05.12.05.17.1.06.02.05.03 6.24 3.6q-.02.84-.2 1.62l-4.18-2.41v.05l.02.13.02.3v7.33a8 8 0 0 1-1.5.62v-4.82l-.19.14-.04.03-.17.1-.05.04-.05.03L7.65 19q-.7-.43-1.28-.99l4.17-2.4-.03-.01-.06-.03-.09-.04-.09-.05-.18-.1-.04-.01-.05-.03-.02-.01-6.22-3.6q.02-.83.2-1.6l4.18 2.4-.02-.16-.01-.11v-.2L8.1 12V4.73a8 8 0 0 1 1.5-.62zm2.4.67a2 2 0 0 0-.5.05l-.05.01-.22.06-.01.01-.38.16-.02.02h-.01l-.01.01-.13.08a2 2 0 0 0-.67.67l-.05.08q0 .02-.03.05v.02H9.9l-.06.1a2.4 2.4 0 0 0-.15 1.77l.09.25.04.07.08.16a2.4 2.4 0 0 0 1.49 1.15l.43.07H12a2.4 2.4 0 0 0 1.16-.29l.03-.01.15-.1.04-.03.09-.06.07-.06.06-.05a2 2 0 0 0 .47-.57v-.02l.03-.04q.15-.28.23-.58l.01-.06a2.4 2.4 0 0 0-.25-1.7l-.03-.05-.08-.12-.28-.34-.1-.1-.2-.16h-.01a2 2 0 0 0-.81-.38l-.13-.03-.3-.03h-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegularDuotone.displayName = 'ApertureRegularDuotone';

// Triple export pattern (lucide-react style)
export { ApertureRegularDuotone, ApertureRegularDuotone as ApertureRegularDuotoneIcon, ApertureRegularDuotone as SiApertureRegularDuotone };
export default ApertureRegularDuotone;
export type { ApertureRegularDuotoneProps };
