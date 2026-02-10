import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreRegularProps = Omit<IconBaseProps, 'children'>;

const StoreRegular = memo(
  forwardRef<SVGSVGElement, StoreRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="store" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.27 3.25c1.48 0 2.79.94 3.27 2.33l.93 2.74c.2.58.25 1.32-.15 1.97a4 4 0 0 1-1.37 1.4V16q.01 1.03-.04 1.7-.03.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H8.8q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-4.31a4 4 0 0 1-1.37-1.4c-.4-.65-.35-1.4-.15-1.97l.94-2.74a3.45 3.45 0 0 1 3.26-2.33zM15 10.75c-.72.9-1.78 1.5-3 1.5s-2.28-.6-3-1.5a3.8 3.8 0 0 1-3.45 1.47V16c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.27.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03H9V16.7q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02h.5q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v2.55h.2c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59v-3.78l-.45.03c-1.22 0-2.28-.6-3-1.5m-3.25 4.7-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v2.55h3V16.7l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01zM6.73 4.75c-.83 0-1.58.53-1.85 1.32L3.94 8.8q-.13.46.02.7A2.4 2.4 0 0 0 6 10.75c.97 0 1.88-.68 2.3-1.77l.05-.1a.75.75 0 0 1 1.35.1c.42 1.1 1.33 1.77 2.3 1.77s1.88-.68 2.3-1.77l.05-.1a.75.75 0 0 1 1.35.1c.42 1.1 1.33 1.77 2.3 1.77.8 0 1.56-.46 2.04-1.24q.16-.24.02-.7l-.94-2.74a1.95 1.95 0 0 0-1.85-1.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreRegular.displayName = 'StoreRegular';

// Triple export pattern (lucide-react style)
export { StoreRegular, StoreRegular as StoreRegularIcon, StoreRegular as SiStoreRegular };
export default StoreRegular;
export type { StoreRegularProps };
