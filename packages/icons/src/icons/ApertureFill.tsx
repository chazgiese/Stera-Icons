import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillProps = Omit<IconBaseProps, 'children'>;

const ApertureFill = memo(
  forwardRef<SVGSVGElement, ApertureFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c2.48 0 4.75.88 6.52 2.34 2.28 1.88 3.73 4.73 3.73 7.91q0 .87-.14 1.7c-.6 3.65-3.14 6.64-6.52 7.9q-1.69.64-3.59.65c-2.48 0-4.75-.88-6.52-2.34C3.2 18.03 1.75 15.18 1.75 12q0-.87.14-1.7c.6-3.65 3.14-6.64 6.52-7.9q1.69-.64 3.59-.65m2.49 13.48-.14.1-.09.06-.16.1-.06.04-.06.03-6.65 3.84c1.35.86 2.95 1.35 4.67 1.35q1.35 0 2.58-.39v-5.2zm1.53-3.88.02.14.02.13v.14l.02.24v7.74c2.22-1.17 3.88-3.27 4.45-5.79zM3.25 12c0 2.53 1.07 4.81 2.8 6.41l4.5-2.6h-.01l-.09-.04-.21-.1-.04-.01-.18-.1-.06-.03-.07-.04-6.63-3.83zm4.67-7.75c-2.22 1.18-3.88 3.28-4.45 5.8l4.5 2.6v-.07l-.03-.21v-.08l-.01-.22V4.25m5.53 3.94.09.04.14.06.13.06.15.08.08.04.05.03.02.01 6.63 3.83.01-.34c0-2.53-1.08-4.81-2.8-6.41zM12 3.25q-1.35 0-2.58.39v5.2q.27-.21.55-.38l.06-.03 6.64-3.83c-1.35-.86-2.95-1.35-4.67-1.35" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFill.displayName = 'ApertureFill';

// Triple export pattern
export { ApertureFill, ApertureFill as ApertureFillIcon, ApertureFill as SiApertureFill };
export default ApertureFill;
export type { ApertureFillProps };
