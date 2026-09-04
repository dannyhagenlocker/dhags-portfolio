import { useState } from "react";
import { useLocation } from "react-router-dom";
import { tabIndex } from "../config/tabs";

/**
 * Which way the page transition should travel:
 *   1 -> forward through the tabs (new page enters from the right)
 *  -1 -> backward through the tabs (new page enters from the left)
 *   0 -> no horizontal movement, cross-fade instead
 */
export type TransitionDirection = -1 | 0 | 1;

type Snapshot = {
  key: string;
  index: number;
  direction: TransitionDirection;
};

export function useTransitionDirection(): TransitionDirection {
  const location = useLocation();
  const index = tabIndex(location.pathname);

  const [snapshot, setSnapshot] = useState<Snapshot>({
    key: location.key,
    index,
    direction: 0,
  });

  if (snapshot.key === location.key) {
    return snapshot.direction;
  }

  // Derived during the render that swaps the route rather than in an effect:
  // an effect commits a render too late, so the transition would animate with
  // the direction of the *previous* navigation.
  //
  // Routes outside the tab bar have no position in the tab order, so there is
  // no meaningful left or right for them.
  const direction: TransitionDirection =
    index === -1 || snapshot.index === -1
      ? 0
      : (Math.sign(index - snapshot.index) as TransitionDirection);

  setSnapshot({ key: location.key, index, direction });
  return direction;
}
