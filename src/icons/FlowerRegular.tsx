import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerRegularProps = Omit<IconBaseProps, 'children'>;

const FlowerRegular = memo(
  forwardRef<SVGSVGElement, FlowerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flower" {...props}>
      <path fillRule="evenodd" d="M7.13 3.75a3.4 3.4 0 0 1 3.98.3q.51.44.89 1.02.38-.59.9-1.01a3.4 3.4 0 0 1 3.97-.31 3.3 3.3 0 0 1 1.72 3.55 4 4 0 0 1-.43 1.22q.68.03 1.31.25A3.3 3.3 0 0 1 21.75 12c0 1.68-1 2.78-2.28 3.23q-.63.22-1.3.25.3.59.42 1.22a3.3 3.3 0 0 1-1.72 3.55 3.4 3.4 0 0 1-3.98-.3 4 4 0 0 1-.9-1.02 4 4 0 0 1-.88 1.01 3.4 3.4 0 0 1-3.98.31 3.3 3.3 0 0 1-1.72-3.55q.11-.63.43-1.22-.69-.03-1.31-.25A3.3 3.3 0 0 1 2.25 12c0-1.68 1-2.78 2.28-3.23q.62-.22 1.3-.25a4 4 0 0 1-.42-1.22 3.3 3.3 0 0 1 1.72-3.55m1.34 11.1a3.2 3.2 0 0 0-1.59 2.12c-.13.75.1 1.48.99 1.98.88.5 1.68.33 2.29-.17a3.2 3.2 0 0 0 1.09-2.39v-.2a4.2 4.2 0 0 1-2.53-1.48zm6.8-.14a4.2 4.2 0 0 1-2.52 1.47v.21c0 .95.44 1.86 1.1 2.4.6.5 1.4.66 2.28.16s1.12-1.23.99-1.98a3.2 3.2 0 0 0-1.59-2.12zM12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-4.27 1.2a3.4 3.4 0 0 0-2.7-.27A1.8 1.8 0 0 0 3.75 12c0 .97.52 1.55 1.28 1.82.8.29 1.85.2 2.7-.28l.26-.14a4.2 4.2 0 0 1 0-2.8zm11.24-.27a3.4 3.4 0 0 0-2.7.28l-.26.14a4.2 4.2 0 0 1 0 2.8l.26.14.16.09c.82.4 1.79.46 2.54.19A1.8 1.8 0 0 0 20.25 12a1.8 1.8 0 0 0-1.28-1.82m-8.81-4.96c-.61-.5-1.4-.67-2.3-.17-.87.5-1.11 1.23-.98 1.98.15.8.74 1.64 1.59 2.12l.25.14a4.3 4.3 0 0 1 2.53-1.47v-.39a3.2 3.2 0 0 0-1.1-2.21m5.97-.17a1.9 1.9 0 0 0-2.29.17 3.2 3.2 0 0 0-1.09 2.39v.2c1.01.19 1.9.72 2.53 1.48l.25-.14a3.2 3.2 0 0 0 1.59-2.12c.13-.75-.1-1.48-.99-1.98" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerRegular.displayName = 'FlowerRegular';

// Triple export pattern (lucide-react style)
export { FlowerRegular, FlowerRegular as FlowerRegularIcon, FlowerRegular as SiFlowerRegular };
export default FlowerRegular;
export type { FlowerRegularProps };
