import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrewdriverRegularProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverRegular = memo(
  forwardRef<SVGSVGElement, ScrewdriverRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="screwdriver" {...props}>
      <path fill="currentColor" d="M16.87 6.06a.75.75 0 0 1 1.07 1.07l-2.55 2.54a.75.75 0 1 1-1.06-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.33 3.52a4.35 4.35 0 0 1 6.15 6.15l-3.82 3.81a.8.8 0 0 1-.53.22h-1.08l-.3 1.52a1 1 0 0 1-.2.38l-1.7 1.7c-.3.29-.77.29-1.06 0l-2.01-2.02-6.25 6.25a.75.75 0 1 1-1.06-1.06l6.25-6.25-2.01-2.01a.75.75 0 0 1 0-1.06l1.7-1.7.07-.07q.15-.09.3-.13l1.52-.3V7.87q0-.32.22-.53zm5.09 1.06a2.85 2.85 0 0 0-4.03 0l-3.59 3.6v1.38c0 .36-.25.67-.6.74l-1.9.37-1 1 4.02 4.03 1-1 .38-1.9.04-.12a.8.8 0 0 1 .7-.48h1.38l3.6-3.6a2.85 2.85 0 0 0 0-4.02" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverRegular.displayName = 'ScrewdriverRegular';

// Triple export pattern (lucide-react style)
export { ScrewdriverRegular, ScrewdriverRegular as ScrewdriverRegularIcon, ScrewdriverRegular as SiScrewdriverRegular };
export default ScrewdriverRegular;
export type { ScrewdriverRegularProps };
