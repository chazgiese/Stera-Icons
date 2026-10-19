import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12.27 7.82c.1-.4.51-.65.91-.55s.65.51.55.91l-2 8c-.1.4-.51.65-.91.55s-.65-.51-.55-.91zM7.97 9.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L7.56 12l1.47 1.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2-2c-.3-.3-.3-.77 0-1.06zM14.97 9.47c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L16.44 12l-1.47-1.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CodeCircleRegularDuotone.displayName = 'CodeCircleRegularDuotone';

// Triple export pattern
export { CodeCircleRegularDuotone, CodeCircleRegularDuotone as CodeCircleRegularDuotoneIcon, CodeCircleRegularDuotone as SiCodeCircleRegularDuotone };
export default CodeCircleRegularDuotone;
export type { CodeCircleRegularDuotoneProps };
