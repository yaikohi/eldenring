import type { Ammo } from 'types/ammo'
import type { Armor } from 'types/armor'
import type { Ash } from 'types/ash'
import type { Boss } from 'types/boss'
import type { Class } from 'types/class'
import type { Creature } from 'types/creature'
import type { Incantation } from 'types/incantation'
import type { Item } from 'types/item'
import type { Location } from 'types/location'
import type { Npc } from 'types/npc'
import type { Sorcery } from 'types/sorcery'
import type { Spirit } from 'types/spirit'
import type { Talisman } from 'types/talisman'
import type { Weapon } from 'types/weapon'

export type EldenRingContent =
  | Ammo
  | Armor
  | Ash
  | Boss
  | Class
  | Creature
  | Incantation
  | Item
  | Location
  | Npc
  | Sorcery
  | Spirit
  | Talisman
  | Weapon
