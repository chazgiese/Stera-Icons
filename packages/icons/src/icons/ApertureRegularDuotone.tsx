import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureRegularDuotone = memo(
  forwardRef<SVGSVGElement, ApertureRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.42 8.84q.24-.2.5-.34l.01-.01.04-.03.06-.03 6.64-3.83q.7.44 1.28.99l-4.5 2.6.08.03.17.08.1.04.18.1.06.03.06.03 6.64 3.84q-.04.83-.21 1.61l-4.51-2.6.04.3v.1l.01.18v7.81q-.7.38-1.5.62v-5.2l-.02.01-.05.05-.14.1-.1.07-.16.1-.06.04-.06.03-6.65 3.84q-.7-.44-1.28-.99l4.5-2.6-.1-.04-.16-.07-.1-.05-.17-.09-.06-.03-.05-.03-6.65-3.84q.04-.83.21-1.61l4.5 2.6v-.07l-.02-.16-.02-.14V4.26q.7-.38 1.5-.62zm2.42.59h-.07l-.09.01-.04.01-.1.02h-.07l-.05.02-.23.06-.05.02-.22.1-.17.08-.03.01v.01l-.19.11q-.15.1-.28.23l-.07.07q-.09.07-.16.18l-.17.21-.08.14-.01.02q-.15.28-.24.56l-.05.22q-.04.21-.05.44l.01.22v.08l.02.1.02.12.01.08.05.2.05.14.11.26.06.1.03.06.07.11.07.09q0 .02.03.05.1.15.23.26l.26.23.22.15.02.01.07.04.18.09.09.04q.15.06.3.1l.03.01.22.05.22.02.2.01q.35 0 .68-.08l.05-.02.18-.06.23-.1.1-.05.02-.01.18-.1q.23-.17.42-.35.2-.22.37-.5v-.01l.01-.01.16-.31q.06-.17.1-.35.07-.22.08-.46v-.36l-.04-.28-.04-.17q-.04-.17-.11-.33l-.14-.29-.03-.05-.08-.13-.2-.25-.1-.12-.12-.1q-.07-.07-.15-.13l-.22-.15-.02-.01-.18-.1-.1-.04-.07-.03-.13-.05-.04-.02-.18-.05-.27-.05-.22-.02h-.29" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegularDuotone.displayName = 'ApertureRegularDuotone';

// Triple export pattern
export { ApertureRegularDuotone, ApertureRegularDuotone as ApertureRegularDuotoneIcon, ApertureRegularDuotone as SiApertureRegularDuotone };
export default ApertureRegularDuotone;
export type { ApertureRegularDuotoneProps };
