      #!/bin/bash


      date=$(date +\%d:\%m:\%Y\ \%H:\%M)

      echo "début du script"

      echo $date  


      echo "--------------------------- DEBUT DU SCRIPT --------------------------------"

      function headers(){

      if [ -z "$(which dmidecode)" ]; then
          echo "dmidecode n'est pas présent (le fichier est introuvable)."
          sudo apt update && sudo apt install -y dmidecode
      else
          echo "dmidecod est installé ici : $(which dmidecode)"
      fi

      if [ -z "$(which figlet)" ]; then
          echo "figlet n'est pas présent (le fichier est introuvable). "
          sudo apt update && sudo apt install -y figlet
          else
              echo "figlet est installé ici : $(which figlet)"
          fi
      }

      headers


      #Affichage de la bannière 3d avec F    #!/bin/bash


      date=$(date +\%d:\%m:\%Y\ \%H:\%M)

      echo "début du script"

      echo $date  


      echo "--------------------------- DEBUT DU SCRIPT --------------------------------"

      function headers(){

      if [ -z "$(which dmidecode)" ]; then
          echo "dmidecode n'est pas présent (le fichier est introuvable)."
          sudo apt update && sudo apt install -y dmidecode
      else
          echo "dmidecod est installé ici : $(which dmidecode)"
      fi

      if [ -z "$(which figlet)" ]; then
          echo "figlet n'est pas présent (le fichier est introuvable). "
          sudo apt update && sudo apt install -y figlet
          else
              echo "figlet est installé ici : $(which figlet)"
          fi
      }

      headers


      #Affichage de la bannière 3d avec Figlet
      hardware() {

                  figlet -f  3-d "Les HARDWARES" | lolcat

          # Extraction du nom du modèle (plus fiable avec 'Model name')
          CPU_MODEL=$(lscpu | grep -n 1 | awk -F':' '{print $2}' | xargs)
          
          # Architecture (x86_64, arm, etc.)
          CPU_ARCH=$(uname -m)
          
          # Nombre de sockets (processeurs physiques)
          CPU_SOCKETS=$(lscpu | grep "Socket(s):" | awk -F ':' '{print $2}' | xargs)
          
          # Nombre de cœurs total
          CPU_NBCORES=$(nproc)
          
          # RAM Totale (on utilise 'free -h' avec un espace et on extrait la valeur)
          RAM_TOTAL=$(free -h | grep "Mem:" | awk '{print $2}')
          # Voir la modèle de RAM
          RAM_MODEL=$(sudo dmidecode -t memory | grep -i "part number")
          # Voir son usage 
          RAM_USED=$(free -h | grep "Mem:" | awk '{print $3}')


          #Voir le disque 
          CAPACITY_DISK=$(lsblk -e 7)
          #Voir sa capacité et son nom
          DISK_SIZE=$(lsblk -d -e 7 -o NAME,SIZE)
          #Voir son usage
          DISK_USAGE=$(df -h /dev/nvme0n1p6)
          #Tabelau ROM !

          echo "DISKS (NAME / SIZE / MODEL):"
          lsblk -d -e 7 -o NAME,SIZE,MODEL


    

          #Adresse MAC
                  
          Interface=$(ip route get 1.1.1.3 | awk '{print $5}' | xargs)
          Adresse_MAC=$(cat /sys/class/net/$Interface/address)

          #Adresse OS 
          OS=$(lsb_release -d)
          #Adresse Kernel 
          kernel=$(uname -r)



      }

      # Appel de la fonction
      hardware

      # Affichage des résultats

          figlet -f  3-d "Les CPU" | lolcat

      echo "Modèle de processeur : $CPU_MODEL"
      echo "Architecture         : $CPU_ARCH"
      echo "Nombre de coeurs     : $CPU_NBCORES"

          figlet -f  3-d "Les RAM" | lolcat

      echo "Mémoire RAM totale   : $RAM_TOTAL"
      echo "Ram : $RAM_MODEL"
      echo "Mémoire RAM utilisée : $RAM_USED"

          figlet -f 3-d "Les Disques" | lolcat


      echo "le(s) disque(s) : $CAPACITY_DISK"
      echo "Utilisé : $DISK_USAGE"
      echo "Nom du disque et stockage : $DISK_SIZE"

              figlet -f 3-d "Le Réseaux" | lolcat


      echo "nom de l'adresse MAC: $Adresse_MAC"
      echo "nom de l'interface: $Interface"

          figlet -f 3-d "Le OS" | lolcat
      
      echo "nom de l'os : $OS"


    # ================= ROM =================
  echo ""
  figlet "== ROM =="

  echo "DISKS (NAME / SIZE / MODEL):"
  lsblk -d -o NAME,SIZE,MODEL

  echo ""

  mapfile -t DISKS < <(lsblk -n | grep disk | awk '{print$1}')

  JSON_DISK=
  echo "DISKS : {" 

  for disk in "${DISKS[@]}"
  do
      echo "DISK: $disk"

      mapfile -t PARTS < <(lsblk -ln -o NAME /dev/$disk)

      i=1
      for part in "${PARTS[@]}"
      do
          if [ "$part" = "$disk" ]
          then 
              :
          else
              echo "partition $i: $part"
              ((i++))
          fi
      done
  done

  echo "}" 

  JSON_DATA=$(jq -n \
    --arg cpu_model "$CPU_MODEL" \
    --arg cpu_arch "$CPU_ARCH" \
    --arg cpu_cores "$CPU_NBCORES" \
    --arg ram_total "$RAM_TOTAL" \
    --arg ram_used "$RAM_USED" \
    --arg ram_model "$RAM_MODEL" \
    --arg disk_size "$DISK_SIZE" \
    --arg disk_usage "$DISK_USAGE" \
    --arg interface "$Interface" \
    --arg mac_address "$Adresse_MAC" \
    --arg os "$OS" \
    --arg kernel "$kernel" \
    '{
      cpu: {
        model: $cpu_model,
        architecture: $cpu_arch,
        cores: $cpu_cores
      },
      ram: {
        total: $ram_total,
        used: $ram_used,
        model: $ram_model
      },
      disks: {
        size: $disk_size,
        usage: $disk_usage
      },
      network: {
        interface: $interface,
        mac_address: $mac_address
      },
      system: {
        os: $os,
        kernel: $kernel
      }
    }'
  )

  curl -X POST http://localhost:8000/endpoint \
    -H "Content-Type: application/json" \
    -d "$JSON_DATA"

  echo "---------------------------- FIN DU SCRIPT ---------------------------------"iglet
      hardware() {

                  figlet -f  3-d "Les HARDWARES" | lolcat

          # Extraction du nom du modèle (plus fiable avec 'Model name')
          CPU_MODEL=$(lscpu | grep -n 1 | awk -F':' '{print $2}' | xargs)
          
          # Architecture (x86_64, arm, etc.)
          CPU_ARCH=$(uname -m)
          
          # Nombre de sockets (processeurs physiques)
          CPU_SOCKETS=$(lscpu | grep "Socket(s):" | awk -F ':' '{print $2}' | xargs)
          
          # Nombre de cœurs total
          CPU_NBCORES=$(nproc)
          
          # RAM Totale (on utilise 'free -h' avec un espace et on extrait la valeur)
          RAM_TOTAL=$(free -h | grep "Mem:" | awk '{print $2}')
          # Voir la modèle de RAM
          RAM_MODEL=$(sudo dmidecode -t memory | grep -i "part number")
          # Voir son usage 
          RAM_USED=$(free -h | grep "Mem:" | awk '{print $3}')


          #Voir le disque 
          CAPACITY_DISK=$(lsblk -e 7)
          #Voir sa capacité et son nom
          DISK_SIZE=$(lsblk -d -e 7 -o NAME,SIZE)
          #Voir son usage
          DISK_USAGE=$(df -h /dev/nvme0n1p6)
          #Tabelau ROM !

          echo "DISKS (NAME / SIZE / MODEL):"
          lsblk -d -e 7 -o NAME,SIZE,MODEL


    

          #Adresse MAC
                  
          Interface=$(ip route get 1.1.1.3 | awk '{print $5}' | xargs)
          Adresse_MAC=$(cat /sys/class/net/$Interface/address)

          #Adresse OS 
          OS=$(lsb_release -d)
          #Adresse Kernel 
          kernel=$(uname -r)
          #Serial Numrer
          SERIAL_NUMBER=$(sudo dmidecode -s system-serial-number)



      }

      # Appel de la fonction
      hardware

      # Affichage des résultats

          figlet -f  3-d "Les CPU" | lolcat

      echo "Modèle de processeur : $CPU_MODEL"
      echo "Architecture         : $CPU_ARCH"
      echo "Nombre de coeurs     : $CPU_NBCORES"

          figlet -f  3-d "Les RAM" | lolcat

      echo "Mémoire RAM totale   : $RAM_TOTAL"
      echo "Ram : $RAM_MODEL"
      echo "Mémoire RAM utilisée : $RAM_USED"

          figlet -f 3-d "Les Disques" | lolcat


      echo "le(s) disque(s) : $CAPACITY_DISK"
      echo "Utilisé : $DISK_USAGE"
      echo "Nom du disque et stockage : $DISK_SIZE"

              figlet -f 3-d "Le Réseaux" | lolcat


      echo "nom de l'adresse MAC: $Adresse_MAC"
      echo "nom de l'interface: $Interface"

          figlet -f 3-d "Le OS" | lolcat
      
      echo "nom de l'os : $OS"


    # ================= ROM =================
  echo ""
  figlet "== ROM =="

  echo "DISKS (NAME / SIZE / MODEL):"
  lsblk -d -o NAME,SIZE,MODEL

  echo ""

  mapfile -t DISKS < <(lsblk -n | grep disk | awk '{print$1}')

  JSON_DISK=
  echo "DISKS : {" 

  for disk in "${DISKS[@]}"
  do
      echo "DISK: $disk"

      mapfile -t PARTS < <(lsblk -ln -o NAME /dev/$disk)

      i=1
      for part in "${PARTS[@]}"
      do
          if [ "$part" = "$disk" ]
          then 
              :
          else
              echo "partition $i: $part"
              ((i++))
          fi
      done
  done

  echo "}" 

  JSON_DATA=$(jq -n \
  --arg serial_number "$SERIAL_NUMBER" \
  --arg cpu_model "$CPU_MODEL" \
  --arg cpu_arch "$CPU_ARCH" \
  --arg cpu_cores "$CPU_NBCORES" \
  --arg ram_total "$RAM_TOTAL" \
  --arg ram_used "$RAM_USED" \
  --arg ram_model "$RAM_MODEL" \
  --arg disk_size "$DISK_SIZE" \
  --arg disk_usage "$DISK_USAGE" \
  --arg interface "$Interface" \
  --arg mac_address "$Adresse_MAC" \
  --arg os "$OS" \
  --arg kernel "$kernel" \
  '{
    serial_number: $serial_number,
    cpu: {
      model: $cpu_model,
      architecture: $cpu_arch,
      cores: $cpu_cores
    },
    ram: {
      total: $ram_total,
      used: $ram_used,
      model: $ram_model
    },
    network: {
      interface: $interface,
      mac_address: $mac_address
    },
    system: {
      os: $os,
      kernel: $kernel
    }
  }'
)
 

  curl -X POST http://localhost:8000/endpoint \
    -H "Content-Type: application/json" \
    -d "$JSON_DATA"

  echo "---------------------------- FIN DU SCRIPT ---------------------------------"