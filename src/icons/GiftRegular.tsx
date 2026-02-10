import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftRegularProps = Omit<IconBaseProps, 'children'>;

const GiftRegular = memo(
  forwardRef<SVGSVGElement, GiftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.91 2.26c.75-.08 1.47.18 2.06.77q.89.92.77 2.06a3.2 3.2 0 0 1-1 1.89q-.14.14-.3.27h2.06q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .52-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.2.1-.41.15v3.12q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H8.2q-.82 0-1.37-.03-.57-.03-1.08-.27a2.8 2.8 0 0 1-1.2-1.2q-.24-.51-.27-1.08-.04-.55-.03-1.37v-3.12a2 2 0 0 1-.4-.15 2 2 0 0 1-.88-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88v-1q0-.51.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.03.88-.02h2.06l-.3-.27a3.2 3.2 0 0 1-1-1.9c-.08-.74.18-1.46.77-2.05a2.5 2.5 0 0 1 2.06-.77c.72.08 1.36.47 1.89 1q.6.59 1.02 1.45.43-.86 1.02-1.45a3.2 3.2 0 0 1 1.9-1m-2.16 16.99h3.05q.83 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-3.05h-5.5zm-7-2.45q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h3.05v-5.5h-5.5zM5.5 8.75l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.14.22.22l.22.04.76.01h5.75v-3.5zm7.25 3.5h5.75l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76v-1l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04l-.76-.01h-5.75zm-3.83-8.5c-.25-.02-.53.05-.83.34s-.36.58-.33.83q.03.43.56 1c.6.6 1.63 1.12 2.88 1.28a5 5 0 0 0-1.28-2.88 1.8 1.8 0 0 0-1-.56m6.16 0c-.29.04-.63.2-1 .57-.6.6-1.12 1.63-1.28 2.88a5 5 0 0 0 2.88-1.28q.53-.57.56-1c.03-.25-.04-.53-.33-.83s-.58-.36-.83-.33" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftRegular.displayName = 'GiftRegular';

// Triple export pattern (lucide-react style)
export { GiftRegular, GiftRegular as GiftRegularIcon, GiftRegular as SiGiftRegular };
export default GiftRegular;
export type { GiftRegularProps };
